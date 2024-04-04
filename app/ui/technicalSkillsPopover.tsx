import React from "react";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";

export default function TechnicalSkillsPopover() {
    return (
        <Popover placement="bottom" color={"default"} showArrow={true}>
            <PopoverTrigger>
                <Button color="secondary" variant="bordered" >Technical Skills</Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="px-1 py-2">
                    <div className="text-small font-bold">Technical Skills</div>
                    <div className="text-tiny"><ul>
                        <li>• Data-Intensive Applications</li>
                        <li>• Frontend Development</li>
                        <li>• Backend Development</li>
                        <li>• Scientific Programming</li>
                        <li>• Biology</li>
                        <li>• Bioinformatics</li>
                        <li>• Linux</li>
                        <li>• Machine Learning</li>
                    </ul></div>
                </div>
            </PopoverContent>
        </Popover>
    );
}