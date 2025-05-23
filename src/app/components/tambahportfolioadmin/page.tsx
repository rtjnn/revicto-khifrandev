"use client";
import React, { useState } from "react";
import { getSupabase } from '@/libs/supabase'

const supabase = getSupabase()

import Image from "next/image";
import { FaPlusCircle, FaSpinner } from "react-icons/fa";

type PortfolioItem = {
  id: number;
  gambar: string;
  nama: string;
  jenis: "web" | "mobile";
  text: string;
};

type PortfolioItemInput = Omit<PortfolioItem, "id"> & {
  file?: File | null;
  previewUrl?: string | null;
};

const TambahPortfolio = () => {
  const [newItem, setNewItem] = useState<PortfolioItemInput>({
    gambar: "",
    nama: "",
    jenis: "web",
    text: "",
    file: null,
    previewUrl: null,
  });

  const [data, setData] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(false); // 👈 Tambahkan state loading

  const handleCreate = async () => {
  if (loading) return;

  // Validasi input kosong
  if (
    !newItem.nama.trim() ||
    !newItem.file ||
    !newItem.jenis.trim() ||
    !newItem.text.trim()
  ) {
    alert("⚠️ Semua data harus diisi terlebih dahulu!");
    return;
  }

  setLoading(true);
  let imageUrl = newItem.gambar;

  try {
    const fileName = `${Date.now()}-${newItem.file.name}`;
    const { error: uploadError } = await supabase.storage
      .from("portfolio")
      .upload(`images/${fileName}`, newItem.file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (uploadError) throw new Error("Gagal upload gambar: " + uploadError.message);

    const { data: urlData } = supabase.storage
      .from("portfolio")
      .getPublicUrl(`images/${fileName}`);
    imageUrl = urlData.publicUrl;

    const { data: inserted, error } = await supabase
      .from("portfolio")
      .insert([
        {
          nama: newItem.nama,
          jenis: newItem.jenis,
          text: newItem.text,
          gambar: imageUrl,
        },
      ])
      .select();

    if (error) throw new Error("Gagal menambahkan data: " + error.message);

    setData((prev) => [...prev, ...(inserted as PortfolioItem[])]);
    setNewItem({
      nama: "",
      jenis: "web",
      text: "",
      gambar: "",
      file: undefined,
      previewUrl: undefined,
    });
    alert("✅ Data berhasil ditambahkan!");
  } catch (err: any) {
    alert("❌ " + err.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <>
      <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-6 py-8 lg:py-12">
        <form className="bg-white dark:bg-neutral-900 shadow-md rounded-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-20 flex items-center justify-center">
            <h1 className="text-xl font-bold text-black drop-shadow-sm">
              Create Project Data
            </h1>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Nama Project */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-neutral-200 mb-1">
                Project name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter project name"
                value={newItem.nama}
                onChange={(e) =>
                  setNewItem({ ...newItem, nama: e.target.value })
                }
              required/>
            </div>
            {/* Upload Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-neutral-200 mb-2">
                Preview image
              </label>
              <label className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 dark:border-neutral-700 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const previewUrl = URL.createObjectURL(file);
                    setNewItem((prev) => ({
                      ...prev,
                      file,
                      previewUrl,
                    }));
                  }}
                required/>
                <FaPlusCircle  className="w-10 h-10 text-gray-400 dark:text-neutral-600 mb-2"/>
                
                <p className="text-sm text-gray-700 dark:text-neutral-300">
                  Browse or <span className="text-blue-600">drag & drop</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">Max file size: 2MB</p>
              </label>

              {newItem.previewUrl && (
                <div className="relative mt-4 w-full max-w-xs">
                  <Image
                    src={newItem.previewUrl}
                    alt="Preview"
                    width={300}
                    height={300}
                    className="rounded-lg object-contain w-full border dark:border-neutral-700 shadow"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setNewItem((prev) => ({
                        ...prev,
                        file: null,
                        previewUrl: null,
                      }))
                    }
                    className="absolute top-2 right-2 bg-white dark:bg-neutral-800 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white p-1 rounded-full transition"
                  >
                    &times;
                  </button>
                </div>
              )}
            </div>
            {/* Kategori */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-neutral-200 mb-1">
                Category
              </label>
              <select
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={newItem.jenis}
                onChange={(e) =>
                  setNewItem({
                    ...newItem,
                    jenis: e.target.value as "web" | "mobile",
                  })
                }
              >
                <option value="">Select a category</option>
                <option value="web">Web</option>
                <option value="mobile">Mobile</option>
              </select>
            </div>
            {/* Deskripsi */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-neutral-200 mb-1">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="A detailed summary will better explain your project."
                value={newItem.text}
                onChange={(e) =>
                  setNewItem({ ...newItem, text: e.target.value })
                }
              />
            </div>
            {/* Tombol Submit */}
            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={handleCreate}
                disabled={loading}
                className={`py-3 px-6 inline-flex items-center gap-2 text-sm font-medium rounded-lg transition
          ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }
          text-white focus:outline-none`}
              >
                {loading ? (
                  <>
                  <FaSpinner  className="animate-spin h-5 w-5 text-white"/>
                    
                    Loading...
                  </>
                ) : (
                  "Submit your project"
                )}
              </button>
            </div>
            
          </div>
        </form>
      </div>
    </>
  );
};

export default TambahPortfolio;
