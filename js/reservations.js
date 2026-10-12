const reservationForm = document.querySelector(".reservation-form");

reservationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;
    const dining = document.getElementById("dining").value;

    if (!name || !date || !time || !guests || !dining) {
        alert("Please complete all required reservation details.");
        return;
    }

    const confirmation = document.createElement("div");

    confirmation.className = "reservation-confirmation";

    confirmation.innerHTML = `
        <div class="confirmation-box">

            <p class="section-label">RESERVATION REQUEST RECEIVED</p>

            <h2>Thank you, ${name}.</h2>

            <p>
                Your request to dine at The Meridian has been received.
                Our reservations team will contact you shortly to confirm your table.
            </p>

            <div class="confirmation-details">

                <div>
                    <span>Date</span>
                    <strong>${date}</strong>
                </div>

                <div>
                    <span>Time</span>
                    <strong>${time}</strong>
                </div>

                <div>
                    <span>Guests</span>
                    <strong>${guests}</strong>
                </div>

                <div>
                    <span>Dining</span>
                    <strong>${dining.replace("-", " ")}</strong>
                </div>

            </div>

            <p class="confirmation-note">
                Your ₦30,000 booking fee will be confirmed with our reservations team.
            </p>

            <button type="button" class="confirmation-button">
                Make Another Reservation
            </button>

        </div>
    `;

    reservationForm.replaceWith(confirmation);

    confirmation
        .querySelector(".confirmation-button")
        .addEventListener("click", function () {

            confirmation.replaceWith(reservationForm);

            reservationForm.reset();

        });

});



const privateGuests = document.getElementById("private-guests");
const privateRoom = document.getElementById("private-room");
const roomInfo = document.getElementById("room-info");
const bookingFee = document.getElementById("booking-fee");

function updatePrivateReservation() {

    const guests = privateGuests.value;
    const room = privateRoom.value;

    if (!guests || !room) {
        roomInfo.innerHTML = "";
        bookingFee.innerHTML =
            "Select the number of guests and a private room to see your reservation fee.";
        return;
    }

    let capacity;
    let fee;

    if (guests === "2-6") {
        capacity = "Up to 6 guests";
        fee = "₦30,000";
    } 
    else if (guests === "7-12") {
        capacity = "Up to 12 guests";
        fee = "₦50,000";
    } 
    else if (guests === "13-20") {
        capacity = "Up to 20 guests";
        fee = "₦75,000";
    } 
    else if (guests === "21-30") {
        capacity = "Up to 30 guests";
        fee = "₦120,000";
    }

    roomInfo.innerHTML = `
        <strong>${privateRoom.options[privateRoom.selectedIndex].text}</strong><br>
        Capacity: ${capacity}
    `;

    bookingFee.innerHTML = `
        Reservation fee: <strong>${fee}</strong>
    `;
}

privateGuests.addEventListener("change", updatePrivateReservation);
privateRoom.addEventListener("change", updatePrivateReservation);