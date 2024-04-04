import React from "react";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";

export default function FocusAreasPopover() {
    return (
        <Popover placement="bottom" color={"default"} showArrow={true}>
            <PopoverTrigger>
                <Button color="secondary" variant="bordered" >Focus Areas</Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="px-1 py-2">
                    <div className="text-base font-bold">Technical Skills</div>
                    <div className="text-sm"><ul>
                        <li>• Software Engineering</li>
                        <ul>
                            <li>• Product</li>
                            <li>• Infrastructure</li>
                        </ul>
                        <li>• Bioinformatics</li>
                        <li>• Web Development</li>
                        <li>• Scientific Programming</li>
                        <ul>
                            <li>• Forensics</li>
                            <li>• Agriculture</li>
                            <li>• Ads</li>
                        </ul>
                        <li>• Linux</li>
                    </ul></div>
                </div>
            </PopoverContent>
        </Popover>
    );
}