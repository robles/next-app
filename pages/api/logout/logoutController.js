const logout = async (req, res) => {
  req.session.destroy();

  res.statusCode = 200;
  res.json({ isLoggedIn: false });
};

export default { logout };
