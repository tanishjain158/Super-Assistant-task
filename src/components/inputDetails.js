export default function inputDetails() {
  return (
    <div>
      <form class=" text-center  p-3">
        <div class="text-start">
          <label class=" form-label" for="FullName">
            Full Name
          </label>
          <input
            type="text"
            placeholder="enter name"
            id="FullName"
            class="form-control"
            required
          />
        </div>
        <div class="text-start p-2">
          <label for="email-input" class=" form-label">
            email
          </label>
          <input
            placeholder="enter email"
            type="email"
            id="email-input"
            class="form-control"
            required
          />
        </div>
        <div class="text-start p-2">
          <label for="age" class=" form-label">
            age
          </label>
          <input
            class="form-control"
            id="age"
            placeholder="enter age"
            type="text"
            required
          />
        </div>
        <div class="text-start p-2">
          <label for="number" class=" form-label">
            number of visits:
          </label>
          <select class="form-select" required>
            <option value="0" selected>
              select a number
            </option>
            <option value="1">one</option>
            <option value="2">two</option>
            <option value="3">three</option>
            <option value="4">four</option>
            <option value="5">five</option>
          </select>
        </div>
        <div class="text-start p-2">
          <label class="form-check-label">select concern department:</label>
          <div class="p-2" required>
            <input
              type="radio"
              name="option"
              class="form-check-input"
              id="op-1"
            />
            <label for="op-1">Gynecologist</label>
            <input
              type="radio"
              name="option"
              id="op-2"
              class="form-check-input"
            />
            <label for="op-2">Dermatologist</label>
            <input
              type="radio"
              name="option"
              id="op-3"
              class="form-check-input"
            />
            <label for="op-3">Orthopedics</label>
            <input
              type="radio"
              name="option"
              id="op-4"
              class="form-check-input"
            />
            <label for="op-4">Neurologist</label>
            <input
              type="radio"
              name="option"
              id="op-5"
              class="form-check-input"
            />
            <label for="op-5">Dentist</label>
          </div>
        </div>

        <div class="text-start p-2">
          <label for="doctor" class=" form-label">
            Doctor:
          </label>
          <select class="form-select" required>
            <option value="none">select your doctor</option>
            <option value="JOHN_HOPKINS">Dr. John Hopkins</option>
            <option value="MAYA_MARIN">Dr. Maya Marin</option>
            <option value="DONNA_DOUGLAS">Dr. Donna Douglas</option>
            <option value="LUTHER_KING">Dr. Luther King</option>
          </select>
        </div>
        <div class="text-start p-2">
          <label for="location" class="form-check-label" required>
            Where?
          </label>
          <input type="radio" id="gmeet" name="location" />
          <label for="gmeet">Google Meet</label>
          <input type="radio" id="phone" name="location" />
          <label for="phone">Tele-Phone</label>
        </div>
        <div class="text-start p-2" required>
          <label for="location">when:</label>
          <input type="datetime-local" class="form-control" />
        </div>
        <input type="submit" class="btn btn-primary" disabled />
        <input type="reset" class="btn btn-dark" />
      </form>
    </div>
  );
}
