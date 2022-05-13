import { Table } from "react-bootstrap";
import InfographicAddModal from "../../../modals/InfographicAddModal";
import InfographicDeleteModal from "../../../modals/InfographicDeleteModal";
import InfographicEditModal from "../../../modals/InfographicEditModal";


const InfographicDataTable = () => {
	return (
		<div className="dashboard-content">
            <div className="d-flex mb-3 justify-content-end">
				<InfographicAddModal />
			</div>
			<Table responsive hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Students Enrolled</th>
						<th>Online Available Courses</th>
						<th>Premium Quality Products</th>
						<th>Teachers Registered</th>
						<th>Action</th>

					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>
							12
						</td>
						<td>25</td>
						<td>212</td>
						<td>2122</td>
						<td>
                        <InfographicEditModal />
                        <InfographicDeleteModal />
						</td>
					</tr>
				</tbody>
			</Table>
			
		</div>
	);
};

export default InfographicDataTable;
