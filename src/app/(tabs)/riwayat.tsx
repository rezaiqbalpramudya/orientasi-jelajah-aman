import { SafeAreaView } from "react-native-safe-area-context";
import RiwayatList from "../../components/RiwayatList";

export default function TabRiwayat() {
  const riwayatPencarian = ["Pekalongan", "Jakarta", "Semarang"];

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <RiwayatList daftarKota={riwayatPencarian} />
    </SafeAreaView>
  );
}