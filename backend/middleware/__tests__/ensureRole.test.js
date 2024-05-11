const ensureRole = require("../ensureRole");
const User = require("../../models/user");

jest.mock("../../models/user");

describe("ensureRole", () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = { session: { id: "userId" } };
    res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    next = jest.fn();
  });

  it("should set req.role to user role if user has the role", async () => {
    const user = { role: "admin" };
    User.findById.mockResolvedValue(user);

    await ensureRole("admin")(req, res, next);

    expect(req.role).toEqual(user.role);
    expect(next).toHaveBeenCalled();
  });

  it("should return 403 if user does not have the role", async () => {
    const user = { role: "user" };
    User.findById.mockResolvedValue(user);

    await ensureRole("admin")(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.send).toHaveBeenCalledWith(
      "User must have one of the following roles: admin"
    );
    expect(next).not.toHaveBeenCalled();
  });

  it("should return 403 if user is not found", async () => {
    User.findById.mockResolvedValue(null);

    await ensureRole("admin")(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.send).toHaveBeenCalledWith(
      "User must have one of the following roles: admin"
    );
    expect(next).not.toHaveBeenCalled();
  });
});
