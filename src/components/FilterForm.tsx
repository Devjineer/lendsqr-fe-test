import "@/styles/form.scss";
import { PlainBtn } from "./common/Btn";

const FilterForm = ({ closeForm }: { closeForm: () => void }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="form">
      <PlainBtn title="Close" className="close-btn" onBtnClick={closeForm} />

      <div>
        <div className="input__group">
          <label htmlFor="organisation" className="input__label">
            Organisation
          </label>

          <select id="organisation" name="organisation" className="input__main">
            <option value="">Select</option>
            <option value="org1">Organisation 1</option>
            <option value="org2">Organisation 2</option>
          </select>
        </div>

        <div className="input__group">
          <label htmlFor="username" className="input__label">
            Username
          </label>

          <input
            type="text"
            id="username"
            name="username"
            placeholder="User"
            className="input__main"
          />
        </div>

        <div className="input__group">
          <label htmlFor="email" className="input__label">
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="input__main"
          />
        </div>

        <div className="input__group">
          <label htmlFor="date" className="input__label">
            Date
          </label>

          <input
            type="date"
            id="date"
            name="date"
            placeholder="Date"
            className="input__main"
          />
        </div>

        <div className="input__group">
          <label htmlFor="phone" className="input__label">
            Phone Number
          </label>

          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            className="input__main"
          />
        </div>

        <div className="input__group">
          <label htmlFor="status" className="input__label">
            Status
          </label>
          
          <select id="status" name="status" className="input__main">
            <option value="">Select</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>{" "}
        </div>

        <div className="btn__container">
          <PlainBtn title="Reset" className="reset-btn" />
          <PlainBtn title="Filter" className="filter-btn" />
        </div>
      </div>
    </form>
  );
};

export default FilterForm;
