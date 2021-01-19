<%@page import="org.json.simple.JSONArray, model.EmpDAO"%>
<%@ page language="java" contentType="application/json; charset=UTF-8"
pageEncoding="UTF-8"%>
<% response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));%>
<%JSONArray jsonArray = EmpDAO.getAllEmployeesJSONArray();%>
<%=jsonArray %>