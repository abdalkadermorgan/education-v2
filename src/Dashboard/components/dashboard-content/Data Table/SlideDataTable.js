import { Table } from "react-bootstrap";
import CourseDeleteModal from "../../../modals/CourseDeleteModal";
import SlideAddModal from "../../../modals/SlideAddModal";
import SlideEditModal from "../../../modals/SlideEditModal";

const SlideDataTable = () => {
	return (
		<div className="dashboard-content">
            <div className="d-flex mb-3 justify-content-end">
				<SlideAddModal />
			</div>
			<Table responsive hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Image</th>
						<th>Title</th>
						<th>Action</th>

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
						<td>
                        <SlideEditModal />
                        <CourseDeleteModal />
						</td>
					</tr>
				</tbody>
			</Table>
			
		</div>
	);
};

export default SlideDataTable;
