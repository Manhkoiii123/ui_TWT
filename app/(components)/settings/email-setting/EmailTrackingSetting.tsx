import { Checkbox } from "@/components/ui/checkbox";

const EmailTrackingSetting = () => {
  return (
    <div className="flex flex-col  space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-[14px] text-[#6b7280] cursor-pointer font-[400] leading-[1.5]"
        >
          Accept terms and conditions
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms2" />
        <label
          htmlFor="terms2"
          className="text-[14px] text-[#6b7280] cursor-pointer font-[400] leading-[1.5]"
        >
          Accept terms and conditions
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms3" />
        <label
          htmlFor="terms3"
          className="text-[14px] text-[#6b7280] cursor-pointer font-[400] leading-[1.5]"
        >
          Accept terms and conditions
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms4" />
        <label
          htmlFor="terms4"
          className="text-[14px] text-[#6b7280] cursor-pointer font-[400] leading-[1.5]"
        >
          Accept terms and conditions
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms5" />
        <label
          htmlFor="terms5"
          className="text-[14px] text-[#6b7280] cursor-pointer font-[400] leading-[1.5]"
        >
          Accept terms and conditions
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms6" />
        <label
          htmlFor="terms6"
          className="text-[14px] text-[#6b7280] cursor-pointer font-[400] leading-[1.5]"
        >
          Accept terms and conditions
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms7" />
        <label
          htmlFor="terms7"
          className="text-[14px] text-[#6b7280] cursor-pointer font-[400] leading-[1.5]"
        >
          Accept terms and conditions
        </label>
      </div>
    </div>
  );
};

export default EmailTrackingSetting;
