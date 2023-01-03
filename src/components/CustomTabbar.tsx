import React, {useState} from 'react';
import {Badge, Counter, Tabbar, TabbarItem} from "@vkontakte/vkui";
import {Icon28MessageOutline, Icon28NewsfeedOutline, Icon28UserCircleOutline} from "@vkontakte/icons";

const CustomTabbar = () => {

    const [indicator, setIndicator] = useState("one");

    return (
        <Tabbar style={{ position: "static", margin: "10px 0 0" }}>
            <TabbarItem
                selected={indicator === "one"}
                onClick={() => setIndicator("one")}
                indicator={<Badge mode="prominent" />}
                text="Новости"
            >
                <Icon28NewsfeedOutline />
            </TabbarItem>
            <TabbarItem
                selected={indicator === "two"}
                onClick={() => setIndicator("two")}
                text="Профиль"
            >
                <Icon28UserCircleOutline />
            </TabbarItem>
            <TabbarItem
                selected={indicator === "three"}
                onClick={() => setIndicator("three")}
                text="Мессенджер"
                indicator={
                    <Counter size="s" mode="prominent">
                        3
                    </Counter>
                }
            >
                <Icon28MessageOutline />
            </TabbarItem>
        </Tabbar>
    );
};

export default CustomTabbar;