import store from "../store/myStore";
import { Provider } from "react-redux";
import { mount, configure, render } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import AddAppointmentContainer from "../components/EditAppointmentContainer";
import SearchAppointmentContainer from "../components/SearchDoctorContainer";

import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("test for add Appointment", () => {
    test("check addAppointmentContainer comes without any issues", () => {
        render(
            <Provider store={store}>
                <AddAppointmentContainer mode="edit" />
            </Provider>,
            { wrapper: MemoryRouter }
        );
    });

    test("app has a single AddAppointmentContainer component and has content....", () => {
        const wrapper = mount(
            <Provider store={store}>
                <AddAppointmentContainer />
            </Provider>
        );
        const someContent = (
            <h1 style={{ textAlign: "center" }}>ADD NEW APPOINTMENTFORM</h1>
        );
        expect(wrapper.contains(someContent)).toEqual(true);
    });

    test("Add Appointment has a 1 h1 element", () => {
        var wrapper = mount(
            <Provider store={store}>
                <AddApointmentContainer />
            </Provider>
        );
        // use CSS selector to find all h1 element
        const noOfh1Elements = wrapper.find("h1").length; // this will return an array
        expect(noOfh1Elements).toEqual(1);
    });

    test("app renders props are passed or not", () => {
        var wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <AddAppointmentContainer mode="edit" />
                </MemoryRouter>
            </Provider>
        );
        console.log(document.body);
        // expect(document.body.textContent.contains
        //     ("EDIT DOCTOR FORM")).toBe(true);
    });
});

describe("test for search Appointment", () => {
    test("check searchAppointmentContainer comes without any issues", () => {
        mount(
            <Provider store={store}>
                <SearchAppointmentContainer />
            </Provider>
        );
    });

    test("app has a single AddAppointmentContainer component and has content....", () => {
        const wrapper = mount(
            <Provider store={store}>
                <SearchAppointmentContainer />
            </Provider>
        );
        const someContent = <h1>APPOINTMENT SEARCH FORM</h1>;
        expect(wrapper.contains(someContent)).toEqual(true);
    });

    test("has a single AddDoctorContainer component and has content....", () => {
        const wrapper = mount(
            <Provider store={store}>
                <SearchAppointmentContainer />
            </Provider>
        );
        const someContent = (
            <h2>
                <b>SEARCH BY</b>
            </h2>
        );
        expect(wrapper.contains(someContent)).toEqual(true);
    });

    test("Search Appointment has a 1 h1 element", () => {
        var wrapper = mount(
            <Provider store={store}>
                <SearchAppointmentContainer />
            </Provider>
        );
        // use CSS selector to find all h1 element
        const noOfh2Elements = wrapper.find("h1").length; // this will return an array
        expect(noOfh2Elements).toEqual(1);
    });

    test("Searc Appointment has a 1 h2 element", () => {
        var wrapper = mount(
            <Provider store={store}>
                <SearchAppointmentContainer />
            </Provider>
        );
        // use CSS selector to find all h1 element
        const noOfh2Elements = wrapper.find("h2").length; // this will return an array
        expect(noOfh2Elements).toEqual(1);
    });

    test("app renders props are passed or not", () => {
        var wrapper = mount(
            <Provider store={store}>
                <SearchAppointmentContainer />
            </Provider>
        );
        expect(wrapper.contains("APPOINTMENTS SEARCH FORM")).toEqual(false);
    });
});