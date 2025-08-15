import { Link } from "react-router-dom";
import Button from "../../components/Button";
import NavbarDashboard from "../../components/NavbarDashboard";

// TypeScript interface for subscription data
interface SubscriptionData {
  id: number;
  name: string;
  duration: string;
  icon: string;
  price: string;
  startedAt: string;
  status: "ACTIVE" | "EXPIRED" | "PENDING";
  detailsUrl: string;
}

// JSON data for subscriptions
const subscriptionData: SubscriptionData[] = [
  {
    id: 1,
    name: "Pro Talent",
    duration: "3 months duration",
    icon: "/src/assets/images/icons/cup-green-fill.svg",
    price: "Rp 1.890.000",
    startedAt: "19 December 2024",
    status: "ACTIVE",
    detailsUrl: "/subscription/details",
  },
  {
    id: 2,
    name: "Premium Learning",
    duration: "6 months duration",
    icon: "/src/assets/images/icons/cup-green-fill.svg",
    price: "Rp 3.250.000",
    startedAt: "15 November 2024",
    status: "ACTIVE",
    detailsUrl: "/subscription/details",
  },
  {
    id: 3,
    name: "Basic Starter",
    duration: "1 month duration",
    icon: "/src/assets/images/icons/cup-green-fill.svg",
    price: "Rp 750.000",
    startedAt: "10 October 2024",
    status: "EXPIRED",
    detailsUrl: "/subscription/details",
  },
  {
    id: 4,
    name: "Enterprise Pro",
    duration: "12 months duration",
    icon: "/src/assets/images/icons/cup-green-fill.svg",
    price: "Rp 5.500.000",
    startedAt: "1 January 2025",
    status: "PENDING",
    detailsUrl: "/subscription/details",
  },
];

export default function Subscription() {
  // Function to get status badge styling
  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return "font-bold text-xs text-obito-green badge w-fit rounded-full py-[6px] px-[10px] gap-[6px] bg-obito-light-green";
      case "EXPIRED":
        return "font-bold text-xs text-red-600 badge w-fit rounded-full py-[6px] px-[10px] gap-[6px] bg-red-100";
      case "PENDING":
        return "font-bold text-xs text-yellow-600 badge w-fit rounded-full py-[6px] px-[10px] gap-[6px] bg-yellow-100";
      default:
        return "font-bold text-xs text-obito-green badge w-fit rounded-full py-[6px] px-[10px] gap-[6px] bg-obito-light-green";
    }
  };

  return (
    <div>
      <NavbarDashboard />
      <div className="relative flex flex-1 h-full min-h-dvh overflow-x-hidden  max-w-[970px] mx-auto lg:max-w-full pb-5 md:pb-10 lg:pb-20">
        <div
          id="background-banner"
          className="hidden lg:flex absolute w-1/2 shrink-0 h-full overflow-hidden right-0"
        >
          <img
            src="/src/assets/images/backgrounds/banner-subscription.png"
            className="w-full h-full object-cover"
            alt="banner"
          />
        </div>
        <section
          id="subscriptions-list"
          className="relative flex flex-col gap-5 mt-[9rem] md:mt-[10rem] lg:mt-[12rem] w-full max-w-[1280px] px-4 lg:px-[75px] py-5 mx-auto"
        >
          <h1 className="font-bold text-[20px] md:text-[24px] lg:text-[28px] leading-[30px] md:leading-[36px] lg:leading-[42px]">
            My Subscriptions
          </h1>
          <div
            id="list-container"
            className="grid md:grid-cols-2 lg:flex flex-col gap-5 w-full overflow-x-auto lg:max-w-fit"
          >
            {subscriptionData.map((subscription) => (
              <div
                key={subscription.id}
                className="subscription-card lg:max-w-fit lg:min-w-[820px] bg-white border border-obito-grey flex flex-col lg:flex-row lg:items-center justify-between rounded-[16px] md:rounded-[18px] lg:rounded-[20px] w-full py-4 md:py-5 lg:py-5 px-3 md:px-5 lg:px-4 gap-3 md:gap-5 lg:gap-8"
              >
                <div className="flex justify-between items-start lg:flex-1">
                  <div className="flex items-center flex-1 gap-3 md:gap-4 lg:gap-[14px]">
                    <div className="flex shrink-0 size-10 md:size-[44px] lg:size-[50px]">
                      <img
                        src={subscription.icon}
                        className="flex shrink-0 size-10 md:size-[44px] lg:size-[50px]"
                        alt="icon"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-base md:text-lg lg:text-lg">
                        {subscription.name}
                      </p>
                      <p className="text-obito-text-secondary text-sm md:text-base lg:text-base">
                        {subscription.duration}
                      </p>
                    </div>
                  </div>

                  <div className="lg:hidden">
                    <span className={getStatusBadgeStyle(subscription.status)}>
                      {subscription.status}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row w-full justify-between lg:flex-col lg:w-[100px] shrink-0 gap-1 md:gap-2 lg:gap-1">
                  <div className="flex items-center gap-1 md:gap-2">
                    <img
                      src="/src/assets/images/icons/note.svg"
                      className="flex w-4 md:w-5 lg:w-5 shrink-0"
                      alt="icon"
                    />
                    <p className="text-xs md:text-sm lg:text-sm">Price</p>
                  </div>
                  <p className="font-semibold text-xs md:text-sm lg:text-sm">
                    {subscription.price}
                  </p>
                </div>
                <div className="flex flex-row w-full justify-between lg:flex-col lg:w-[150px] shrink-0 gap-1 md:gap-2 lg:gap-1">
                  <div className="flex items-center gap-1 md:gap-2">
                    <img
                      src="/src/assets/images/icons/note.svg"
                      className="flex w-4 md:w-5 lg:w-5 shrink-0"
                      alt="icon"
                    />
                    <p className="text-xs md:text-sm lg:text-sm">Started At</p>
                  </div>
                  <p className="font-semibold text-xs md:text-sm lg:text-sm">
                    {subscription.startedAt}
                  </p>
                </div>
                <div className="hidden lg:flex items-center justify-center w-[60px] md:w-[70px] lg:w-[75px] shrink-0">
                  <span className={getStatusBadgeStyle(subscription.status)}>
                    {subscription.status}
                  </span>
                </div>
                <Link to={subscription.detailsUrl}>
                  <Button
                    variant="outline"
                    className="w-full flex-center md:w-fit lg:w-fit text-xs md:text-sm lg:text-base py-2 md:py-[10px] px-4 md:px-5"
                  >
                    Details
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
