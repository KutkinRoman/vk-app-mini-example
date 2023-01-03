import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Avatar, Button, Cell, Div, Group, Header, Panel, PanelHeader, Text} from '@vkontakte/vkui';
import CustomText from "../components/CustomText";
import CustomTabbar from "../components/CustomTabbar";
import axios from "axios";

const API = axios.create({
    baseURL: 'http://194.67.105.103/api/v1'
})

API.interceptors.request.use(function (config) {

    console.log('axios.interceptors.request', config)

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

const Home = ({id, go, fetchedUser}) => {

    const test = async () => {
      const response = await API.get('/')
       console.log(response)
    }

    useEffect(() => {
        test()
    }, [])

    return (
        <Panel id={id}>
            <PanelHeader>HOME PAGE</PanelHeader>
            {fetchedUser &&
                <Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
                    <Cell
                        before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                        description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
                    >
                        {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
                    </Cell>
                </Group>}

            <Group header={<Header mode="secondary">Navigation Example</Header>}>
                <Div>
                    <Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
                        Show me the Persik, please
                    </Button>
                    <CustomText/>
                    <Text weight={'1'}>
                        {JSON.stringify(fetchedUser, null, '\t')}
                    </Text>
                </Div>
            </Group>
            <CustomTabbar/>
        </Panel>
    )
}

Home.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};

export default Home;
