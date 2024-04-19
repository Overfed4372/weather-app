import Form from "./form";
import Weather from "./weather";
import Ui from "./ui";
export default class Runner {
    static runForm () {
        Form.elements.form().addEventListener("submit", (event) => {
            event.preventDefault();
            Ui.showLoading();
            const location = Form.getLocation();
            console.log("k",location);
            // (
            //     async () => {
            //         const data = await Weather.getData(location);
            //         console.log("data",data);
            //     }
            // )();
            (async () => {
                const data = await Weather.getData(location);
                console.log('data',data);
                if (data instanceof Error) {
                    Ui.showNetworkError();
                }
                else if (data === "type-error") {
                    Ui.showTypeError();
                } else {
                    Ui.update({
                        city: data.location.name,
                        country: data.location.country,
                        temp_c: data.current.temp_c,
                        temp_f: data.current.temp_f,
                        dayOrNight: data.current.is_day
                    });
                }
            } 
            )();
            Form.clearForm();
        });
    }
}