import { Table } from "react-bootstrap";
import CoursesAddModal from "../../../modals/CoursesAddModal";

const CourseDataTable = () => {
	return (
		<div className="dashboard-content">
            <div className="d-flex mb-3 justify-content-end">
				<CoursesAddModal />
			</div>
			<Table responsive hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Image</th>
						<th>Title</th>
						<th>Catigory</th>
						<th>Price</th>
						<th>Discounts</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>
							<img
								src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
								width={50}
								height={50}
								alt=""
							/>
						</td>
						<td>Title</td>
						<td>Catigory</td>
						<td>Price</td>
						<td>Discounts</td>
						<td>
							
						</td>
					</tr>
					<tr>
						<td>2</td>
						{Array.from({ length: 6 }).map((_, index) => (
							<td key={index}>Table cell {index}</td>
						))}
					</tr>
					<tr>
						<td>3</td>
						{Array.from({ length: 6 }).map((_, index) => (
							<td key={index}>Table cell {index}</td>
						))}
					</tr>
				</tbody>
			</Table>
			
		</div>
	);
};

export default CourseDataTable;
