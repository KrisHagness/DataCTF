import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <h1 className="font-bold text-xl px-4 text-center">Neste link er litt vanskelig å se på bildet.</h1>
      <Image src="/blurretlenke.png" alt="blurret lenke" width={2000} height={2000} className="my-4" />
      <Image src="/hintTilLokasjon.png" alt="Hint til anfi grønn base" width={2000} height={2000} />
    </main>
  );
}
