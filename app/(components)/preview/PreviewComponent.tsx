"use client";

import { useQueryGetCampaignDetail } from "@/api/campains/campainsApi";
import { useParams } from "next/navigation";

const PreviewComponent = () => {
  const { id } = useParams();
  const { data } = useQueryGetCampaignDetail(id as string);
  return (
    <>
      <div className=" flex items-center justify-center  w-full">
        <div className=" w-full bg-white rounded-lg shadow-xl p-8">
          <div className="text-center border-b pb-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Campaign Details : {data?.title}
            </h1>
          </div>

          <div className="space-y-4">
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
                "en-US"
              )}
            </p>
            <p className="text-gray-600">
              <strong>Created By:</strong> {data?.created_by?.name}(
              {data?.created_by?.email})
            </p>
            <p className="text-gray-600">
              <strong>Created At:</strong>{" "}
              {new Date(data?.created_at as string).toLocaleString("en-US")}
            </p>
          </div>

          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">
              Template Body:
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
    </>
  );
};

export default PreviewComponent;
