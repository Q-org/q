
import React from 'react';
export default function qwe() {
	return (<>
		<style>{`
textarea {
	overflow: auto;
}

.table_input {
	text-decoration: none;
	letter-spacing: 0px;
	word-spacing: normal;
	border: 1px none #CCCCCC;
}
`}</style>
		<form id="form1" name="form1" method="post" action=""><br />
			<table border="1" align="left" cellPadding="0"
				cellSpacing="0"><tbody>
					<tr>
						<td bgcolor="#FFFFFF"><br />
							<br />
							<table border="0" align="center" cellPadding="0"
								cellSpacing="0" className="title_black"><tbody>
									<tr>
										<td align="center" className="title_blackCopy_copy">答案表</td>
									</tr>
									<tr>
										<td>
											<table border="0" cellPadding="0" cellSpacing="1"
												bgcolor="#000000"><tbody>
													<tr>
														<td bgcolor="#FFFFFF">
															<table border="0" cellPadding="0" cellSpacing="1"
																bgcolor="#000000" style={{ background: "#fff", }}><tbody>
																	<tr>
																		<td bgcolor="#FFFFFF"><br />
																			<br />
																			<textarea name="a100" cols="60" rows="10" className="table_input"
																				id="a100"></textarea> <br />
																			<br />
																		</td>
																	</tr></tbody></table>
														</td>
													</tr></tbody></table>
										</td>
									</tr></tbody></table>
							<p className="title_small">&nbsp;</p>
						</td>
					</tr></tbody></table>

		</form>

	</>);
}
