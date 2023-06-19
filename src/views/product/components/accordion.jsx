export default function Accordion () {
  return (
    <div className="w-full mx-auto p-8">
      <div className="shadow-md">
        <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-single-one"
              type="radio"
              name="tabs2"
            />

            <label
              className="block p-5 leading-normal cursor-pointer text-[#324baa]"
              htmlFor="tab-single-one"
            >
              Ecological footprint
            </label>
            
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#324baa] leading-normal">
              <p className="p-5">
                <span className="font-semibold">2.9</span> Ecological footprint (globalhectares)
              </p>
              <p className="p-5">
                <span className="font-semibold">4.9</span> CO2 Emissions (emissions CO2 tons per year)
              </p>
              <p className="p-5">
                <span className="font-semibold">55</span> Carbon footprint % of your total ecological footprint
              </p>
            </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-single-two"
              type="radio"
              name="tabs2"
            />

            <label 
              className="block p-5 leading-normal cursor-pointer text-[#324baa]"
              htmlFor="tab-single-two"
            >
              Production process
            </label>

            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#324baa] leading-normal">
              <p className="p-5">
                <span className="font-semibold">2.9</span> Ecological footprint (globalhectares)
              </p>
              <p className="p-5">
                <span className="font-semibold">4.9</span> CO2 Emissions (emissions CO2 tons per year)
              </p>
              <p className="p-5">
                <span className="font-semibold">55</span> Carbon footprint % of your total ecological footprint
              </p>
            </div>
        </div>
        <div className="tab w-full overflow-hidden border-t">
            <input 
              className="absolute opacity-0"
              id="tab-single-three"
              type="radio"
              name="tabs2"
            />

            <label 
              className="block p-5 leading-normal cursor-pointer text-[#324baa]" htmlFor="tab-single-three"
            >
              Packaging
            </label>

            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#324baa] leading-normal">
              <p className="p-5">
                <span className="font-semibold">2.9</span> Ecological footprint (globalhectares)
              </p>
              <p className="p-5">
                <span className="font-semibold">4.9</span> CO2 Emissions (emissions CO2 tons per year)
              </p>
              <p className="p-5">
                <span className="font-semibold">55</span> Carbon footprint % of your total ecological footprint
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}