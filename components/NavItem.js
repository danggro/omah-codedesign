import Link from "next/link";
import Button from "./Button";

export default function NavItem() {
  return (
    <ul className="flex justify-end space-x-[56px] items-center text-[16px] text-secondary">
      <li>
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
      </li>
      <li>
        <Link href="/omah" className="hover:text-primary">
          To Rent
        </Link>
      </li>
      <li>
        <Link href="/omah" className="hover:text-primary">
          For Sale
        </Link>
      </li>
      <li>
        <Link href="/omah" className="hover:text-primary">
          Blog
        </Link>
      </li>
      <li>
        <Button className="w-[134px] h-[62px]">Log In</Button>
      </li>
    </ul>
  );
}
