import Image from "next/image";

const Strategy = ({ref}) => {
    return (
        <section className="relative" ref={ref} id="strategy">
            <div className="max-w-screen-xl mx-auto pt-16 pb-8 max-sm:pt-0 max-sm:pb-0 max-sm:px-4">
                <div className="flex flex-col relative gap-8 max-sm:gap-2">
                    <div className="max-sm:flex max-sm:flex-row max-sm:gap-8 max-sm:justify-between">
                        <h2 className="text-[44px] font-medium leading-[52.8px] text-customBlackOne max-sm:text-[20px] max-sm:leading-[24px] max-sm:font-semibold max-sm:pl-4 max-sm:py-3 max-sm:max-w-[180px]">Who needs the
                            strategy?</h2>
                        <Image src="/darts.png" alt="darts" height={77} width={115}
                               className="hidden object-contain max-sm:inline-block w-full h-auto"/>
                    </div>
                    <div className="flex flex-row max-sm:flex-col">
                        <ul className="flex flex-col max-w-[727px]">
                            <li className="flex flex-row h-16 max-sm:flex-col max-sm:h-auto">
                                <p className="text-[20px] leading-[24px]  py-4 pr-8 max-w-[344px] w-full border-r-[1px] border-customGrey border-solid flex items-center text-customBlackOne max-sm:px-4 max-sm:text-[16px] max-sm:leading-[19.2px] max-sm:border-b-[1px] max-sm:border-customGrey max-sm:border-solid max-sm:border-r-0 max-sm:max-w-full">
                                    If you are just starting out
                                </p>
                                <p className="text-[20px] leading-[24px] py-4 px-8 max-w-[368px] w-full text-customBlackOne max-sm:px-4 max-sm:text-[16px] max-sm:leading-[19.2px]">
                                    You want to trade successfully
                                </p>
                            </li>
                            <li className="flex flex-row  border-t-[1px] border-customGrey border-solid h-[88px] max-sm:flex-col max-sm:h-auto">
                                <p className="text-[20px] leading-[24px]  py-4 pr-8 max-w-[344px] w-full border-r-[1px] border-customGrey border-solid text-customBlackOne max-sm:px-4 max-sm:text-[16px] max-sm:leading-[19.2px] max-sm:border-b-[1px] max-sm:border-customGrey max-sm:border-solid max-sm:border-r-0 max-sm:max-w-full">
                                    You don't want to follow a lot of rules
                                </p>
                                <p className="text-[20px] leading-[24px] py-4 px-8 max-w-[368px] w-full text-customBlackOne max-sm:px-4 max-sm:text-[16px] max-sm:leading-[19.2px] max-sm:border-b-[1px] max-sm:border-customGrey max-sm:border-solid max-sm:max-w-full">
                                    You only have less an hour to trade
                                </p>
                            </li>
                        </ul>
                        <Image src="/darts.png" alt="darts" height={255} width={382}
                               className="object-contain absolute right-0 bottom-0 max-sm:hidden"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Strategy;