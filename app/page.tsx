import { Button } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, } from "@nextui-org/react";
import { SiDotnet, SiTypescript, SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython, FaJava, FaPhp, FaReact, FaPenFancy , FaDna } from "react-icons/fa";
import { FaGolang, FaComputer } from "react-icons/fa6";
import { PiFileSqlThin } from "react-icons/pi";
import TechnicalSkillsPopover from "./ui/popovers/technicalSkillsPopover"
import FocusAreasPopover from "./ui/popovers/focusAreasPopover";
import InterestsPopover from "./ui/popovers/interestsPopover";
import EducationPopover from "./ui/popovers/educationPopover";

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
            <InterestsPopover/>
            <EducationPopover/>
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
            <FaPenFancy size={40}/>
            <div className="flex flex-col">
              <p className="text-md">Handwriter</p>
              <p className="text-small text-default-500">2018 - </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Handwriting Analysis Suite: R package and Web Application</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/CSAFE-ISU/handwriter"
            >
              R Package
            </Link>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/b-esc/Handwriter-Web"
              >Web Application</Link>
          </CardFooter>
        </Card>
        <Card className="col-span-2">
          <CardHeader className="flex gap-3">
            <FaDna size={40}/>
            <div className="flex flex-col">
              <p className="text-md">Gene Network Visualizer</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Web application visualizing relationships between genes and their descriptions.</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href="https://github.com/b-esc/Gene-Network-Visualizer"
            >
              Source
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
