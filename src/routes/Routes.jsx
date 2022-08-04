import { Route, Routes } from "react-router-dom";
import HomeContainer from "../components/container/HomeContainer";
import RatonContainer from "../components/container/RatonContainer";
import RatonListarContainer from "../components/container/RatonListadoContainer";
import DevicesContainer from "../components/container/DevicesContainer";
import Individual from "../components/Raton/Individual";
import NewDeviceContainer from "../components/container/NewDeviceContainer";
import EditDeviceContainer from "../components/container/EditDeviceContainer";

function RoutesApp(){
    return(
        <Routes>
            <Route exact path="/" element={<HomeContainer/>} />
            {/* <Route exact path="/ratones" element={<RatonContainer/>} />
            <Route exact path="/ratonesListar" element={<RatonListarContainer/>} />
            <Route exact path="/ratones/:id/edit" element={<Individual/>} /> */}
            <Route exact path="/:type" element={<DevicesContainer/>} />
            <Route exact path="new/:type" element={<NewDeviceContainer/>} />
            <Route exact path="edit/:type/:id" element={<EditDeviceContainer/>} />
        </Routes>
    )
}

export default RoutesApp