import { GoDotFill } from "react-icons/go";

const DevEducation = () => {
  return (
    <div className="flex justify-center items-center text-[#f9f9f9] px-4 sm:pl-24 lg:pl-32 xl:pl-40 md:pr-[4%] lg:pr-[6%] w-screen md:h-screen my-32 md:my-0">
      <div className="hidden lg:block text-[#3db5ce] text-sm xl:text-base font-semibold">
        <div className="flex justify-around gap-6 px-4 xl:px-6">
          <div className="flex pl-2">
            <div>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
            </div>
            <p className="flex gap-2 pl-">
              - - - -{" "}
              <span className="flex flex-col text-[#7FFFD4] font-normal space-y-1">
                <span>2020</span>
                <span>Secondary School Certificate (SSC)</span>
                <span>Eco Pathshala and College</span>
                <span>Thakurgaon, Bangladesh</span>
              </span>
            </p>
          </div>

          <div className="flex">
            <div>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
            </div>
            <p className="flex gap-2">
              - - - -{" "}
              <span className="flex flex-col text-[#7FFFD4] font-normal space-y-1">
                <span>2024...</span>
                <span>
                  B. Sc. in Computer Science and <br className="xl:hidden" />
                  Engineering (CSE)
                </span>
                <span>Daffodil International University (DIU)</span>
                <span>Dhaka, Bangladesh</span>
              </span>
            </p>
          </div>
        </div>

        <p className="hidden lg:flex xl:hidden items-center">
          <GoDotFill className="text-sm text-[#7FFFD4]" />
          &nbsp;- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - - - -
        </p>
        <p className="hidden xl:flex items-center">
          <GoDotFill className="text-sm text-[#7FFFD4]" />
          &nbsp;- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        </p>

        <div className="flex justify-center">
          <div>
            <div>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
            </div>
            <span className="flex gap-2">
              |- - - -{" "}
              <span className="flex flex-col text-[#7FFFD4] font-normal space-y-1">
                <span>2022</span>
                <span>Higher Secondary Certificate (HSC)</span>
                <span>Eco College</span>
                <span>Thakurgaon, Bangladesh</span>
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex justify-center items-center text-[#3db5ce] text-[11px] sm:text-[12.5px] font-semibold">
        <div className="">
          <div className="">
            <div>
              <p>|</p>
              <p>|</p>
              <p>|</p>
            </div>
            <div className="flex">
              <div>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
                <p>|</p>
              </div>
              <p className="flex gap-2 pl-">
                - - -{" "}
                <span className="flex flex-col text-[#7FFFD4] font-normal space-y-1">
                  <span>2020</span>
                  <span>Secondary School Certificate (SSC)</span>
                  <span>Eco Pathshala and College</span>
                  <span>Thakurgaon, Bangladesh</span>
                </span>
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
            </div>
            <p className="flex gap-2 pl-">
              - - -{" "}
              <span className="flex flex-col text-[#7FFFD4] font-normal space-y-1">
                <span>2022</span>
                <span>Higher Secondary Certificate (HSC)</span>
                <span>Eco College</span>
                <span>Thakurgaon, Bangladesh</span>
              </span>
            </p>
          </div>

          <div className="flex">
            <div>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
              <p>|</p>
            </div>
            <p className="flex gap-2">
              - - -{" "}
              <span className="flex flex-col text-[#7FFFD4] font-normal space-y-1">
                <span>2024...</span>
                <span>
                  B. Sc. in Computer Science and
                  <br className="sm:hidden" />
                  Engineering (CSE)
                </span>
                <span>
                  Daffodil International University
                  <br className="sm:hidden" />
                  (DIU)
                </span>
                <span>Dhaka, Bangladesh</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevEducation;
