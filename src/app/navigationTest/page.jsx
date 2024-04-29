import Link from "next/link";

const NavigationTestPage = () => {
  return <div>
    <Link href="/" prefetch={false}>home</Link>
  </div>;
};

export default NavigationTestPage;
