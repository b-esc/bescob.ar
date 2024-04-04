import { Button } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, } from "@nextui-org/react";
import { SiDotnet, SiTypescript, SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython, FaJava, FaPhp, FaReact } from "react-icons/fa";
import { FaGolang, FaComputer } from "react-icons/fa6";
import { PiFileSqlThin } from "react-icons/pi";
import TechnicalSkillsPopover from "./ui/technicalSkillsPopover"
import FocusAreasPopover from "./ui/focusAreasPopover";


export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-4 gap-5 m-10">
        <Card className="col-span-5">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <h1 className="text-3xl">Hi. I'm Ben.</h1>
              <h1 className="text-2xl">A Software Engineer.</h1>
              <p className="text-small text-default-500">High throughput systems, web development, scientific programming, and cryptocurrency.</p>
            </div>
          </CardHeader>
          <Divider />
        </Card>
        <Card className="col-span-1">
          <CardBody>
            <TechnicalSkillsPopover/>
            <FocusAreasPopover/>
          </CardBody>
        </Card>
        <Card className="col-span-4">
          <CardHeader className="flex gap-3">
            <FaComputer size={40}/>
            <div className="flex flex-col">
              <p className="text-md">Technologies</p>
            </div>

          </CardHeader>
          <Divider />
          <CardBody >
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
              <IoLogoJavascript size={70} />
              <SiTypescript size={70} />
              <FaReact size={70} />
              <SiNextdotjs size={70} />
              <FaPython size={70} />
              <FaPhp size={70} />
              <FaJava size={70} />
              <FaGolang size={70} />
              <PiFileSqlThin size={70} />
            </div>
          </CardBody>
        </Card>
        <Card className="col-span-2">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">NextUI</p>
              <p className="text-small text-default-500">nextui.org</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
        <Card className="col-span-2">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">NextUI</p>
              <p className="text-small text-default-500">nextui.org</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
