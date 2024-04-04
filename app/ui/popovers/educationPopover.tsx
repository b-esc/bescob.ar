import React from "react";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";

export default function EducationPopover() {
    return (
        <Popover placement="bottom" color={"default"} showArrow={true}>
            <PopoverTrigger>
                <Button color="secondary" variant="bordered" >Education</Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="px-1 py-2">
                    <div className="text-base font-bold">Education</div>
                    <div className="text-sm">
                        <ul>
                            <li>• Iowa State University</li>
                            <li>• Bachelor's of Science in Computer Science</li>
                            <li>• Minor in Bioinformatics</li>
                        </ul>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}