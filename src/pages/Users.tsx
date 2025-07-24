import UserTabs from "../components/users/UserTabs";
import "../styles/users.scss";

const Users = () => {
  return (
    <section className="users">
      <h2>Users</h2>
      <UserTabs />
      {/* <table>
        <thead>
          <tr>
            <th>Organization</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date Joined</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Acme Corp</td>
            <td>johndoe</td>
            <td>johndoe@example.com</td>
            <td>+1234567890</td>
            <td>2025-01-01</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>
          <tr>
            <td>Beta Inc</td>
            <td>janedoe</td>
            <td>janedoe@example.com</td>
            <td>+1987654321</td>
            <td>2025-02-15</td>
            <td>Inactive</td>
            <td>Edit | Delete</td>
          </tr>
          <tr>
            <td>Gamma LLC</td>
            <td>alicew</td>
            <td>alicew@example.com</td>
            <td>+1122334455</td>
            <td>2025-03-10</td>
            <td>Pending</td>
            <td>Edit | Delete</td>
          </tr>
          <tr>
            <td>Delta Ltd</td>
            <td>bobsmith</td>
            <td>bobsmith@example.com</td>
            <td>+1223344556</td>
            <td>2025-04-05</td>
            <td>Blacklisted</td>
            <td>Edit | Delete</td>
          </tr>
          <tr>
            <td>Epsilon PLC</td>
            <td>carolb</td>
            <td>carolb@example.com</td>
            <td>+1334455667</td>
            <td>2025-05-20</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>
          <tr>
            <td>Zeta Group</td>
            <td>davidk</td>
            <td>davidk@example.com</td>
            <td>+1445566778</td>
            <td>2025-06-12</td>
            <td>Inactive</td>
            <td>Edit | Delete</td>
          </tr>
          <tr>
            <td>Eta Solutions</td>
            <td>emilyr</td>
            <td>emilyr@example.com</td>
            <td>+1556677889</td>
            <td>2025-07-01</td>
            <td>Pending</td>
            <td>Edit | Delete</td>
          </tr>
          <tr>
            <td>Theta Tech</td>
            <td>frankm</td>
            <td>frankm@example.com</td>
            <td>+1667788990</td>
            <td>2025-07-15</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>
          <tr>
            <td>Iota Systems</td>
            <td>graceh</td>
            <td>graceh@example.com</td>
            <td>+1778899001</td>
            <td>2025-07-20</td>
            <td>Blacklisted</td>
            <td>Edit | Delete</td>
          </tr>
          <tr>
            <td>Kappa Works</td>
            <td>henryp</td>
            <td>henryp@example.com</td>
            <td>+1889900112</td>
            <td>2025-07-24</td>
            <td>Active</td>
            <td>Edit | Delete</td>
          </tr>
        </tbody>
      </table> */}
      <div>
        <div>
          <div>Organization</div>
          <div>Username</div>
          <div>Email</div>
          <div>Phone Number</div>
          <div>Date Joined</div>
          <div>Status</div>
          <div>Actions</div>
        </div>
        <div>
          <div>Acme Corp</div>
          <div>johndoe</div>
          <div>johndoe@example.com</div>
          <div>+1234567890</div>
          <div>2025-01-01</div>
          <div>Active</div>
          <div>Edit | Delete</div>
        </div>
        <div>
          <div>Beta Inc</div>
          <div>janedoe</div>
          <div>janedoe@example.com</div>
          <div>+1987654321</div>
          <div>2025-02-15</div>
          <div>Inactive</div>
          <div>Edit | Delete</div>
        </div>
        <div>
          <div>Gamma LLC</div>
          <div>alicew</div>
          <div>alicew@example.com</div>
          <div>+1122334455</div>
          <div>2025-03-10</div>
          <div>Pending</div>
          <div>Edit | Delete</div>
        </div>
        <div>
          <div>Delta Ltd</div>
          <div>bobsmith</div>
          <div>bobsmith@example.com</div>
          <div>+1223344556</div>
          <div>2025-04-05</div>
          <div>Blacklisted</div>
          <div>Edit | Delete</div>
        </div>
        <div>
          <div>Epsilon PLC</div>
          <div>carolb</div>
          <div>carolb@example.com</div>
          <div>+1334455667</div>
          <div>2025-05-20</div>
          <div>Active</div>
          <div>Edit | Delete</div>
        </div>
        <div>
          <div>Zeta Group</div>
          <div>davidk</div>
          <div>davidk@example.com</div>
          <div>+1445566778</div>
          <div>2025-06-12</div>
          <div>Inactive</div>
          <div>Edit | Delete</div>
        </div>
        <div>
          <div>Eta Solutions</div>
          <div>emilyr</div>
          <div>emilyr@example.com</div>
          <div>+1556677889</div>
          <div>2025-07-01</div>
          <div>Pending</div>
          <div>Edit | Delete</div>
        </div>
        <div>
          <div>Theta Tech</div>
          <div>frankm</div>
          <div>frankm@example.com</div>
          <div>+1667788990</div>
          <div>2025-07-15</div>
          <div>Active</div>
          <div>Edit | Delete</div>
        </div>
        <div>
          <div>Iota Systems</div>
          <div>graceh</div>
          <div>graceh@example.com</div>
          <div>+1778899001</div>
          <div>2025-07-20</div>
          <div>Blacklisted</div>
          <div>Edit | Delete</div>
        </div>
        <div>
          <div>Kappa Works</div>
          <div>henryp</div>
          <div>henryp@example.com</div>
          <div>+1889900112</div>
          <div>2025-07-24</div>
          <div>Active</div>
          <div>Edit | Delete</div>
        </div>
      </div>
    </section>
  );
};

export default Users;
