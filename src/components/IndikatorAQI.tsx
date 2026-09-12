import { View, Text } from "react-native";

// 1. Interface LaporanUdara
export interface LaporanUdara {
  kota: string;
  indeksAQI: number;
  tingkat: "BAIK" | "SEDANG" | "TIDAK_SEHAT" | "BERBAHAYA";
  diperbaruiPada?: string;
}

// 2. Komponen IndikatorAQI
export default function IndikatorAQI({ kota, indeksAQI, tingkat, diperbaruiPada }: LaporanUdara) {
  // Menentukan warna berdasarkan tingkat AQI
  let warnaTingkat = "green"; 
  
  if (tingkat === "SEDANG") {
    warnaTingkat = "orange";
  } else if (tingkat === "TIDAK_SEHAT") {
    warnaTingkat = "red";
  } else if (tingkat === "BERBAHAYA") {
    warnaTingkat = "darkred";
  }

  return (
    <View style={{ padding: 16, backgroundColor: "#E8F0F2", borderRadius: 8, marginTop: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{kota}</Text>
      <Text>Indeks AQI: {indeksAQI}</Text>
      <Text style={{ color: warnaTingkat, fontWeight: "bold" }}>Status: {tingkat}</Text>
      
      {/* Cek apakah 'diperbaruiPada' ada datanya sebelum dirender */}
      {diperbaruiPada && (
        <Text style={{ fontSize: 12, color: "gray", marginTop: 4 }}>
          Terakhir diperbarui: {diperbaruiPada}
        </Text>
      )}
    </View>
  );
}