package model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import util.DBUtil;

public class EmpDAO {
	
//	private static EmpDAO EmpDAO = new EmpDAO();
//	private EmpDAO() {}
//	public static EmpDAO getInstance() {
//	return EmpDAO;
//	}
	public static JSONArray getAllEmployeesJSONArray() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		JSONArray jsonArray = new JSONArray();
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select * from employees");
			rset = pstmt.executeQuery();

			while (rset.next()) {
				JSONObject jsonObject = new JSONObject(); // Map컬렉션
				jsonObject.put("employee_id", rset.getInt("employee_id"));
				jsonObject.put("first_name", rset.getString("first_name"));
				jsonObject.put("last_name", rset.getString("last_name"));
				jsonObject.put("email", rset.getString("email"));
				jsonObject.put("phone_number", rset.getString("phone_number"));
				jsonObject.put("hire_date", rset.getString("hire_date"));
				jsonObject.put("job_id", rset.getString("job_id"));
				jsonObject.put("salary", rset.getInt("salary"));
				jsonObject.put("commission_pct", rset.getInt("commission_pct"));
				jsonObject.put("manager_id", rset.getInt("manager_id"));
				jsonObject.put("department_id", rset.getInt("department_id"));
				jsonArray.add(jsonObject);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBUtil.close(con, pstmt, rset);
		}
		return jsonArray;
	} // getAllMembersJSONArray()

}
