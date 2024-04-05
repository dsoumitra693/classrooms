import React from 'react'
import { LabelInputContainer } from '@/components/ui/Lable'
import { Label } from '@/components/ui/label'
import { BgGlow } from '@/components/ui/BgGlow'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './select'

export const StreamInput = ({ handleChange }: { handleChange: (e: { target: { id: string; value: string } }) => void }) => {
    return (
        <LabelInputContainer>
            <Label htmlFor="stream">Stream</Label>
            <BgGlow>
                <Select onValueChange={(value) => handleChange({ target: { id: "stream", value } })}>
                    <SelectTrigger className="w-full md:w-[130px] h-[2.625rem] bg-white">
                        <SelectValue placeholder="Select Stream" className="placeholder:text-neutral-400 dark:placeholder-text-neutral-600" />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectGroup>
                            <SelectItem value="APM">Apereal Product Mangement</SelectItem>
                            <SelectItem value="CSE">Computer Science & Engineering</SelectItem>
                            <SelectItem value="IT">Information Technology</SelectItem>
                            <SelectItem value="TT">Textile Technology</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </BgGlow>
        </LabelInputContainer>
    )
}
