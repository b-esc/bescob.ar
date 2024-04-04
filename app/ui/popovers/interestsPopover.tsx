import React from "react";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";

export default function InterestsPopover() {
    return (
        <Popover placement="bottom" color={"default"} showArrow={true}>
            <PopoverTrigger>
                <Button color="secondary" variant="bordered" >Interests</Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="px-1 py-2">
                    <div className="text-base font-bold">Interests</div>
                    <div className="text-sm">
                        <ul>
                            <li>• Mixed Martial Arts</li>
                            <li>• Software Engineering</li>
                            <li>• Cars</li>
                            <li>• Cryptocurrency</li>
                        </ul>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}