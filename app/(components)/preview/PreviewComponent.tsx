"use client";

import {
  useMutationSendmail,
  useMutationUnSendmail,
  useQueryGetCampaignDetail,
} from "@/api/campains/campainsApi";
import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useParams } from "next/navigation";

const PreviewComponent = () => {
  const { id } = useParams();
  const { data, isLoading } = useQueryGetCampaignDetail(id as string);
  const { mutate: mutateAsyncSendMail, isPending: isPendingSend } =
    useMutationSendmail();
  const { mutate: mutateAsyncUnSendMail, isPending: isPendingUnSend } =
    useMutationUnSendmail();
  const handleSend = () => {
    mutateAsyncSendMail(id as string);
  };
  const handleUnSend = () => {
    mutateAsyncUnSendMail(id as string);
  };
  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center w-[100%] h-[calc(100vh-200px)]">
          <Loading />
        </div>
      )}
      {!isLoading && (
        <div className=" flex items-center justify-center  w-full">
          <div className=" w-full bg-white rounded-lg shadow-xl p-8">
            <div className=" border-b pb-4 mb-6 flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-gray-800">
                  Campaign Details : {data?.title}
                </h1>

                <p className="text-gray-600">
                  <strong>Status:</strong>{" "}
                  <span className="text-blue-600">{data?.status_label}</span>
                  {data?.status === 2 && (
                    <span>
                      {" "}
                      (
                      {new Date(data?.updated_at as string).toLocaleString(
                        "en-GB"
                      )}
                      )
                    </span>
                  )}
                </p>
                {data?.status === 0 && (
                  <p className="text-gray-600">
                    <strong>Send At:</strong>{" "}
                    {new Date(data?.schedule_send_at as string).toLocaleString(
                      "en-GB"
                    )}
                  </p>
                )}
              </div>

              {data?.status === 0 && (
                <Button
                  variant={"outline"}
                  className=""
                  onClick={handleSend}
                  disabled={isPendingSend}
                >
                  Launch
                </Button>
              )}
              {data?.status === 1 && (
                <Button
                  variant={"outline"}
                  className=""
                  onClick={handleUnSend}
                  disabled={isPendingUnSend}
                >
                  Cancel launch
                </Button>
              )}
            </div>

            <div className="">
              <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">
                  Basic Infomation :
                </h3>
                <div className="space-y-2 mt-2 pl-6">
                  <p className="text-gray-600">
                    <strong>Status:</strong>{" "}
                    <span className="text-blue-600">{data?.status_label}</span>
                  </p>
                  <p className="text-gray-600">
                    <strong>Group:</strong> {data?.group}
                  </p>
                  <p className="text-gray-600">
                    <strong>Schedule Send At:</strong>{" "}
                    {new Date(data?.schedule_send_at as string).toLocaleString(
                      "en-GB"
                    )}
                  </p>

                  <p className="text-gray-600">
                    <strong>Created By:</strong> {data?.created_by?.name}(
                    {data?.created_by?.email})
                  </p>
                  <p className="text-gray-600">
                    <strong>Created At:</strong>{" "}
                    {new Date(data?.created_at as string).toLocaleString(
                      "en-GB"
                    )}
                  </p>
                </div>
              </div>
              <div className="flex gap-0 lg:gap-4 flex-col lg:flex-row">
                <div className="mt-6 bg-gray-100 p-4 rounded-lg flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Audience:
                  </h3>
                  {data?.audiences.map((item, index) => (
                    <div className="space-y-2 mt-2 pl-6" key={index}>
                      <p className="text-gray-600">
                        <strong>Title:</strong> {item?.title}
                      </p>
                      <p className="text-gray-600">
                        <strong>Type:</strong>{" "}
                        {item?.type ? JSON.parse(item?.type).join(", ") : ""}
                      </p>
                      {index !== data.audiences.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-gray-100 p-4 rounded-lg flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Mail setting :
                  </h3>
                  <div className="space-y-2 mt-2 pl-6">
                    <p className="text-gray-600">
                      <strong>Mailer:</strong> {data?.mail_setting?.mailer}
                    </p>
                    <p className="text-gray-600">
                      <strong>Address:</strong> {data?.mail_setting?.address}
                    </p>
                    <p className="text-gray-600">
                      <strong>Name:</strong> {data?.mail_setting?.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800">
                Template Body :
              </h3>
              <div className="border p-4 rounded-md bg-white mt-2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.template_body?.body_html as string,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreviewComponent;
