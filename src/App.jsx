import React, { useCallback, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  Frame,
  TopBar,
  Navigation,
  Badge,
  Button,
  Text,
  Icon,
  AppProvider,
} from "@shopify/polaris";
import {
  CirclePlusOutlineMinor,
  NotificationMajor,
} from "@shopify/polaris-icons";
import "./index.css";
import RoutesNav from "./Routes";

import {
  HomeMajor,
  OrdersMajor,
  AppsFilledMajor,
  JobsMajor,
  CustomerPlusMajor,
  DiscountsMajor,
  ArchiveMajor,
  QuestionMarkMajor,
  SettingsMajor,
  GiftCardMajor,
  PhoneMajor,
} from "@shopify/polaris-icons";

function App() {
  const skipToContentRef = useRef(null);
  const location = useLocation();
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  );

  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );

  const userMenuActions = [
    {
      items: [{ content: "Community forums" }],
    },
  ];

  const userMenuMarkup = (
    <div className="header-icon-container">
      <div style={{ display: "flex" }}>
        <div className="header-credits content-fit">Available credits:4</div>
        <Icon source={CirclePlusOutlineMinor} color="base" />
      </div>
      <Button>Submit a new task</Button>
      <Icon source={NotificationMajor} color="base" />
      <TopBar.UserMenu
        actions={userMenuActions}
        name="Store name 1"
        detail={<Text variation="positive">Subscribe now</Text>}
        initials="🦄"
        open={userMenuActive}
        onToggle={toggleUserMenuActive}
      />
    </div>
  );

  const logo = {
    topBarSource:
      "https://www.bathtub2boardroom.com/wp-content/uploads/2017/04/Dashboard-R-Logo-header.png",
    url: "https://www.bathtub2boardroom.com/tubbers/dashboard/",
    width: 116,
    accessibilityLabel: "Dandevday",
  };

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  const navigationMarkup = (
    <Navigation location={location.pathname}>
      <Navigation.Section
        items={[
          {
            url: "/",
            label: "Home",
            icon: HomeMajor,
          },
          {
            url: "/task",
            label: " Task Catalog",
            icon: AppsFilledMajor,
            badge: "5",
          },
        ]}
      />
      <Navigation.Section
        title="MY PROJECTS"
        items={[
          {
            url: "/active",
            label: "Active",
            icon: JobsMajor,
            badge: <Badge tone="info-strong">2</Badge>,
          },
          {
            url: "/completed",
            label: "Complete",
            icon: OrdersMajor,
          },
          {
            url: "/uncompleted",
            label: "Uncomplete",
            icon: ArchiveMajor,
          },
        ]}
      />
      <Navigation.Section
        title="MY PLAN"
        items={[
          {
            url: "subscribe",
            label: "Subscribe",
            icon: DiscountsMajor,
            badge: <Badge tone="success-strong">Save 40%</Badge>,
          },
        ]}
      />
      <Navigation.Section
        title="MORE"
        fill={true}
        separator={true}
        items={[
          {
            url: "/member-perks",
            label: "Member Perks",
            icon: GiftCardMajor,
          },
          {
            url: "/invite-friends",
            label: "Invite Friends",
            icon: CustomerPlusMajor,
            badge: <Badge tone="success-strong">Earn 10$</Badge>,
          },
          {
            url: "/contact",
            label: "Contact Us",
            icon: PhoneMajor,
          },
          {
            url: "/faq",
            label: "FAQ",
            icon: QuestionMarkMajor,
          },
        ]}
      />
      <Navigation.Section
        items={[
          {
            url: "/settings",
            label: "Settings",
            icon: SettingsMajor,
          },
        ]}
      />
    </Navigation>
  );

  return (
    <AppProvider>
      <Frame
        topBar={topBarMarkup}
        navigation={navigationMarkup}
        logo={logo}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={toggleMobileNavigationActive}
        skipToContentTarget={skipToContentRef.current}
      >
        <RoutesNav />
      </Frame>
    </AppProvider>
  );
}

export default App;
