import { Toast } from 'bootstrap';
import IconV3 from "../Images/IconV3.png"; 

function Placeholder() {

    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
            const toast = new Toast(toastLiveExample)
    
        toast.show()
      })
    }

    return (
        <div className="container-fluid page">
            <div className="container text-center">
                <h1>Placeholder content here</h1>
            </div>
            <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

            <div class="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <img className="IconV3.png rounded me-2" src={IconV3} width="17" height="17"></img>
                        <strong class="me-auto"></strong>
                        <strong>title copied!</strong>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    {/* <div class="toast-body">
                        Title copied!
                    </div> */}
                </div>
            </div>
            
        </div>
    )

};

export default Placeholder