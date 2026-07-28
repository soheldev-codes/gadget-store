
import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="rounded-lg  p-2 text-white">
        
      <Image
        src="/logo.png"
        alt="Arif Gadget Store"
        width={50}
        height={50}
        priority
      />
    
      </div>

      <div>
        <h2 className="font-heading text-lg font-bold leading-none">
          Arif Gadget
        </h2>

        <p className="text-xs text-muted-foreground">
          Premium Store
        </p>
      </div>
    </Link>
  );
}