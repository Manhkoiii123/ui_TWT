import { useState } from "react";
import {
  useMutationEditEmailTracking,
  useQueryEmailTracking,
} from "@/api/emailSetting/emailSettingApi";
import { Checkbox } from "@/components/ui/checkbox";

const EmailTrackingSetting = () => {
  const { data: dataEmailTracking } = useQueryEmailTracking();
  const { mutate: updateEmailTracking } = useMutationEditEmailTracking();

  const [checkedStates, setCheckedStates] = useState<{
    [key: string]: boolean;
  }>({});

  const handleCheckboxChange = (id: string, isChecked: boolean) => {
    setCheckedStates((prev) => ({
      ...prev,
      [id]: isChecked,
    }));

    const status = isChecked ? 1 : 0;
    updateEmailTracking({
      id: id,
      data: { status: status },
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      {dataEmailTracking?.map((item) => {
        const isChecked = checkedStates[item.id] ?? item.status === 1;

        return (
          <div className="flex items-center space-x-2" key={item.id}>
            <Checkbox
              id={item.id.toString()}
              checked={isChecked}
              onCheckedChange={(checked) =>
                handleCheckboxChange(item.id.toString(), checked as boolean)
              }
            />
            <label
              htmlFor={item.id.toString()}
              className="text-[14px] text-[#6b7280] cursor-pointer font-[400] leading-[1.5]"
            >
              {item.title}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default EmailTrackingSetting;
