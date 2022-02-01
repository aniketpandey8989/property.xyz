import Link from "next/link";
import { useRouter } from "next/router";

const Tab = ({ href, isSelected, title }: any) => (
    <Link href={href}>
      <a
        style={{
          padding: 5,
          margin: 5,
          backgroundColor: isSelected ? "blue" : "transparent",
        }}
      >
        {title}
      </a>
    </Link>
)

export default function Home() {
  const { query } = useRouter();
console.log(query,"query")
  const isTabOneSelected = !!query.tabOne;
  const isTabTwoSelected = !!query.tabTwo;

  return (
    <div>
        <nav>
          <Tab href="/?tabOne=true" title="Tab One" isSelected={isTabOneSelected} /> 
          <Tab href="/?tabTwo=true" title="Tab Two" isSelected={isTabTwoSelected} /> 
        </nav>
    </div>
  );
}
