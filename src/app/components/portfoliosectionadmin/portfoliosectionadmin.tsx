"use client";

import { useState, useEffect } from "react";
import { getSupabase } from '@/libs/supabase'

const supabase = getSupabase()

import { FaSearch } from "react-icons/fa";

type PortfolioItem = {
  id: number;
  gambar: string;
  nama: string;
  jenis: "web" | "mobile";
  text: string;
};

const PortfolioSectionAdmin = () => {
  const [data, setData] = useState<PortfolioItem[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editItem, setEditItem] = useState<Omit<PortfolioItem, "id"> | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    const { data, error } = await supabase.from("portfolio").select("*");
    if (error) {
      alert("❌ Gagal mengambil data: " + error.message);
    } else {
      setData(data as PortfolioItem[]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handleEditClick = (item: PortfolioItem) => {
    setEditingId(item.id);
    setEditItem({
      nama: item.nama,
      jenis: item.jenis,
      gambar: item.gambar,
      text: item.text,
    });
  };

  const handleUpdate = async () => {
    if (!editItem || editingId === null) return;

    if (!editItem.nama || !editItem.gambar || !editItem.text) {
      alert("⚠️ Semua field harus diisi.");
      return;
    }

    const { error } = await supabase
      .from("portfolio")
      .update(editItem)
      .eq("id", editingId);

    if (error) {
      alert("❌ Gagal mengupdate data: " + error.message);
    } else {
      setData((prev) =>
        prev.map((item) =>
          item.id === editingId ? { ...item, ...editItem } : item
        )
      );
      setEditingId(null);
      setEditItem(null);
      alert("✅ Data berhasil diupdate!");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Yakin ingin menghapus item ini?")) return;
    const { error } = await supabase.from("portfolio").delete().eq("id", id);
    if (error) {
      alert("❌ Gagal menghapus data: " + error.message);
    } else {
      setData((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const filteredData = data.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.nama.toLowerCase().includes(query) ||
      item.jenis.toLowerCase().includes(query) ||
      item.text.toLowerCase().includes(query)
    );
  });

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border border-gray-200 rounded-lg divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
            {/* Search Input */}
            <div className="py-3 px-4">
              <div className="relative max-w-xs">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full px-4 py-2 ps-10 text-sm border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:placeholder-neutral-400"
                  placeholder="Search for items"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3 text-gray-500 dark:text-neutral-400">
                  <FaSearch />
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto w-full">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-gray-50 dark:bg-neutral-700">
                  <tr>
                    {["Image", "Project Name", "Category", "Description", "Action"].map((header, index) => (
                      <th
                        key={index}
                        className="px-4 py-3 text-xs font-medium uppercase text-start text-gray-500 dark:text-neutral-400"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {paginatedData.map((item) => (
                    <tr key={item.id} className="border-t dark:border-neutral-700">
                      <td className="px-4 py-3 whitespace-nowrap">
                        <img src={item.gambar} alt={item.nama} className="h-14 w-14 object-contain rounded-md border dark:border-neutral-700" />
                      </td>
                      <td className="px-4 py-3 text-sm">
                        {editingId === item.id ? (
                          <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-md text-sm dark:bg-neutral-800 dark:border-neutral-600 dark:text-white"
                            value={editItem?.nama || ""}
                            onChange={(e) => setEditItem({ ...editItem!, nama: e.target.value })}
                          />
                        ) : (
                          <span className="text-gray-800 dark:text-neutral-200">{item.nama}</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        {editingId === item.id ? (
                          <select
                            className="w-full px-3 py-2 border rounded-md text-sm dark:bg-neutral-800 dark:border-neutral-600 dark:text-white"
                            value={editItem?.jenis}
                            onChange={(e) => setEditItem({ ...editItem!, jenis: e.target.value as "web" | "mobile" })}
                          >
                            <option value="web">Web</option>
                            <option value="mobile">Mobile</option>
                          </select>
                        ) : (
                          <span className="text-gray-800 dark:text-neutral-200">{item.jenis}</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm max-w-xs">
                        {editingId === item.id ? (
                          <textarea
                            className="w-full px-3 py-2 border rounded-md text-sm dark:bg-neutral-800 dark:border-neutral-600 dark:text-white"
                            value={editItem?.text || ""}
                            onChange={(e) => setEditItem({ ...editItem!, text: e.target.value })}
                          />
                        ) : (
                          <div className="text-gray-800 dark:text-neutral-200 max-h-24 overflow-y-auto pr-2 whitespace-pre-line">
                            {item.text}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm text-end space-x-2">
                        {editingId === item.id ? (
                          <>
                            <button
                              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs"
                              onClick={handleUpdate}
                            >
                              Save
                            </button>
                            <button
                              className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded text-xs"
                              onClick={() => {
                                setEditingId(null);
                                setEditItem(null);
                              }}
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
                              onClick={() => handleEditClick(item)}
                            >
                              Edit
                            </button>
                            <button
                              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                              onClick={() => handleDelete(item.id)}
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="py-1 px-4">
              <nav className="flex items-center space-x-1" aria-label="Pagination">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className="p-2.5 min-w-10 inline-flex justify-center items-center text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                  aria-label="Previous"
                  disabled={currentPage === 1}
                >
                  «
                </button>

                {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`min-w-10 flex justify-center items-center py-2.5 text-sm rounded-full ${
                      currentPage === i + 1
                        ? "bg-blue-600 text-white"
                        : "text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) =>
                      Math.min(prev + 1, Math.ceil(filteredData.length / itemsPerPage))
                    )
                  }
                  className="p-2.5 min-w-10 inline-flex justify-center items-center text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                  aria-label="Next"
                  disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
                >
                  »
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSectionAdmin;
