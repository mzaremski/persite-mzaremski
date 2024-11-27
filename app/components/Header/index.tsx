import { Flex, Avatar } from "@radix-ui/themes";
import { TypeAnimation } from "react-type-animation"; 

export default function Header() {
  return (
    <Flex gap="4" align="center">
      {/* PERSITE_TODO_CHANGE_ME: */}
      <Avatar
        src="../avatar.jpg"
        fallback="A"
        size="7"
      />
      <div>
        <h1 style={{ fontSize: '2.5rem', margin: '0' }}>Marcin Zaremski</h1>
        <span style={{ fontSize: '1.5rem' }}>
          A<TypeAnimation
            speed={2}
            repeat={Infinity}
            sequence={[
              "\ developer",
              "n indie hacker",
              "\ freelancer ",
              "n entrepreneur",
              "\ photograper",
              "\ surfer",
              "\ cyclist",
            ]}
          />
        </span>
      </div>
    </Flex>
  )
}
