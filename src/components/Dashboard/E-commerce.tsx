"use client";
import React, { useEffect, useRef, useState } from "react";
import TableOne from "../Tables/TableOne";
import axios from "axios";
import moment from "moment";
import { Options } from "flatpickr/dist/types/options";

const formatDate = (date: string) => {
  if (date) {
    return moment(date).local().format("DD/MM/YYYY HH:mm");
  }
  return "";
};

const formatNumber = (num: any) => {
  if (num === 0) return 0;
  return (Math.round(num * 100) / 100).toFixed(2);
};

interface DropdownProps {
  title: string;
  value: string;
}

const Dropdown: React.FC<DropdownProps> = ({ title, value }) => {
  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {title}
      </label>

      <div className="relative bg-white dark:bg-form-input">
        <select
          value={value}
          onChange={(e) => {}}
          className={`relative w-full appearance-none rounded border border-stroke bg-transparent px-12 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input`}
        >
          <option value={value} className="text-body dark:text-bodydark">
            {value}
          </option>
        </select>

        <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                fill="#637381"
              ></path>
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
};

const MultipleDropdown: React.FC = () => {
  const [options, setOptions] = useState<Options[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<any>(null);
  const trigger = useRef<any>(null);

  const selectedValues = () => {
    return ["FLOW", "Dust", "Temp", "PRESSURE"];
  };

  return (
    <div className="relative z-50">
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        Thông số
      </label>
      <div>
        <select className="hidden" id={"1"}>
          <option value="1">Option 2</option>
          <option value="2">Option 3</option>
          <option value="3">Option 4</option>
          <option value="4">Option 5</option>
        </select>

        <div className="flex flex-col items-center">
          <div className="relative z-20 inline-block w-full">
            <div className="relative flex flex-col items-center">
              <div ref={trigger} onClick={() => {}} className="w-full">
                <div className="mb-2 flex rounded border border-stroke py-2 pl-3 pr-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                  <div className="flex flex-auto flex-wrap gap-3">
                    {["FLOW", "Dust", "Temp", "PRESSURE"].map((item, index) => (
                      <div
                        key={index}
                        className="my-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray px-2.5 py-1.5 text-sm font-medium dark:border-strokedark dark:bg-white/30"
                      >
                        <div className="max-w-full flex-initial">{item}</div>
                        <div className="flex flex-auto flex-row-reverse">
                          <div
                            onClick={() => {}}
                            className="cursor-pointer pl-2 hover:text-danger"
                          >
                            <svg
                              className="fill-current"
                              role="button"
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex w-8 items-center py-1 pl-1 pr-1">
                    <button
                      type="button"
                      onClick={() => {}}
                      className="h-6 w-6 cursor-pointer outline-none focus:outline-none"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill="#637381"
                          ></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ECommerce: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const response = await axios({
        method: "get",
        headers: {
          authority: "quantrac-api.vicemhatien.vn",
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUxYjViZDk5ZTQ5ZDAwMWJjNDkxMTkiLCJwYXNzd29yZCI6IiQyYiQxMCRXTy9YN0NlV3RYQllDSWp5Y3hpT2d1R0ExdThieWRqYmp4RFZienBlMDkydU5Gc0EySFNJaSIsImlhdCI6MTcxMDM5OTU2M30.l8oJwvHnD179PNiyRG9diBzauPT4zzCRelJYuy_c5OE",
          accept: "application/json",
          "accept-language": "vi",
          "if-none-match": 'W/"aa50-Y+ie+EX4Bnx9JQVMrKQs9YfYpGo"',
          origin: "https://quantrac.vicemhatien.vn",
          referer: "https://quantrac.vicemhatien.vn/",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "macOS",
          "sec-fetch-dest": "empty",
          "sec-fetch-site": "same-site",
        },
        url: "https://quantrac-api.vicemhatien.vn/data-station-auto/NhaMayPhuHuu_To1/analyze?&from=2024-02-29T17:00:00Z&to=2024-03-15T16:59:59Z&measuringList=Dust,FLOW,Temp,PRESSURE",
      });
      const data = response?.data?.data;

      if (data && data.length) {
        setData(data);
      }

      console.log("xxxxxxxxxxx", JSON.stringify(data));
    } catch (error) {}
  };
  return (
    <>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12">
          <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
              Tra cứu dữ liệu gốc
            </h4>
            <div className="flex flex-row">
              <Dropdown title="Đơn vị quản lý" value="Trạm nghiền Phú Hữu" />
              <div className="w-2" />
              <Dropdown title="Loại trạm" value="Khí Thải Phú Hữu" />
              <div className="w-2" />
              <Dropdown title="Tên trạm" value="Trạm Nghiền Phú Hữu (Line 1)" />
              <div className="w-2" />
              <Dropdown
                title="Thời gian"
                value="01/03/2024 00:00 - 15/03/2024 23:59"
              />
            </div>
            <div className="mb-6" />
            <MultipleDropdown />
            <div className="mb-6" />
            <div className="flex flex-col">
              <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
                <div className="p-2.5 xl:p-5">
                  <h5 className="text-sm font-medium uppercase xsm:text-base">
                    Thông số
                  </h5>
                </div>
                <div className="p-2.5 text-center xl:p-5">
                  <h5 className="text-sm font-medium uppercase xsm:text-base">
                    Thời gian vượt tối đa
                  </h5>
                </div>
                <div className="p-2.5 text-center xl:p-5">
                  <h5 className="text-sm font-medium uppercase xsm:text-base">
                    Giá trị tối đa
                  </h5>
                </div>
                <div className="hidden p-2.5 text-center sm:block xl:p-5">
                  <h5 className="text-sm font-medium uppercase xsm:text-base">
                    Thời gian giảm tối thiểu
                  </h5>
                </div>
                <div className="hidden p-2.5 text-center sm:block xl:p-5">
                  <h5 className="text-sm font-medium uppercase xsm:text-base">
                    Giá trị tối thiểu
                  </h5>
                </div>
                <div className="hidden p-2.5 text-center sm:block xl:p-5">
                  <h5 className="text-sm font-medium uppercase xsm:text-base">
                    Giá trị trung bình
                  </h5>
                </div>
              </div>

              {data.map((item: any) => {
                const type = item?.key ?? "";
                const maxDate = formatDate(item?.max?.data?.[0]?.receivedAt);
                const maxValue = formatNumber(item?.max?.data?.[0]?.value ?? 0);
                const minDate = formatDate(item?.min?.data?.[0]?.receivedAt);
                const minValue = formatNumber(item?.min?.data?.[0]?.value ?? 0);
                const avgValue = formatNumber(item?.avg?.data?.[0]?.value);
                return (
                  <div className={`grid grid-cols-3 sm:grid-cols-6`} key={type}>
                    <div className="flex items-center gap-3 p-2.5 xl:p-5">
                      <p className="hidden text-black dark:text-white sm:block">
                        {type}
                      </p>
                    </div>
                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                      <p className="text-black dark:text-white">{maxDate}</p>
                    </div>

                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                      <p className="text-meta-5">{maxValue}</p>
                    </div>

                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                      <p className="text-black dark:text-white">{minDate}</p>
                    </div>

                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                      <p className="text-meta-5">{minValue}</p>
                    </div>
                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                      <p className="text-meta-5">{avgValue}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ECommerce;
