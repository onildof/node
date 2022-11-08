const path = require("node:path");
const l = console.log.bind(console);

l(path.delimiter, path.win32.delimiter, path.posix.delimiter);
l(path.sep, path.win32.sep, path.posix.sep);
l(path.parse("C:\\folder\\subfolder\\file.jpg"));
l(path.posix.parse("/etc/folder/subfolder/file.jpg"));

// root needs a sep at the end. dir doesn't
l(path.format({ dir: "C:\\folder\\subfolder", base: "file.jpg" })); // dir + '\\' + base
l(path.format({ root: "C:\\", name: "file", ext: ".jpg" })); // root + name + ext

l(path.posix.format({ dir: "/etc", base: "folder/subfolder/file.jpg" }));
l(
  path.posix.format({
    root: "/",
    name: "file",
    ext: "jpg",
  })
);

l("path.dirname:", path.dirname("C:\\folder\\subfolder\\file.jpg"));
l("path.basename:", path.basename("C:\\folder\\subfolder\\file.jpg"));
l("path.extname:", path.extname("C:\\folder\\subfolder\\file.jpg"));

l("path.posix.dirname:", path.posix.dirname("/etc/folder/subfolder/file.jpg"));
l(
  "path.posix.basename:",
  path.posix.basename("/etc/folder/subfolder/file.jpg")
);
l("path.posix.extname:", path.posix.extname("/etc/folder/subfolder/file.jpg"));

l(
  "path.posix.isAbsolute('/etc/file.jpg')",
  path.posix.isAbsolute("/etc/file.jpg")
);
l("path.posix.isAbsolute('/folder/..')", path.posix.isAbsolute("/folder/.."));
l("path.posix.isAbsolute('/')", path.posix.isAbsolute("/"));

l("path.win32.isAbsolute('//server')", path.win32.isAbsolute("//server"));
l("path.win32.isAbsolute('\\\\server')", path.win32.isAbsolute("\\\\server"));
l("path.win32.isAbsolute('//')", path.win32.isAbsolute("//"));
l("path.win32.isAbsolute('\\\\')", path.win32.isAbsolute("\\\\"));
l("path.win32.isAbsolute('C:\\')", path.win32.isAbsolute("C:\\"));
l("path.win32.isAbsolute('C:/')", path.win32.isAbsolute("C:/"));

//path.join(...paths) joins paths with path.sep and then normalizes the result
l(
  'path.posix.join("/", "quux/foo", "bar", "..")',
  path.posix.join("/", "quux/foo", "bar", "..")
);

// path.normalize(path) resolves . and .. and removes excessive / and \
l(
  "path.normalize(C:\\Users\\\\Heavy\\Documents\\dev\\\\\\\\\\\\node\\.)",
  path.normalize("C:\\Users\\\\Heavy\\Documents\\dev\\\\\\\\\\\\node\\.")
);
l('path.normalize(".")', path.normalize("."));

// path.relative(path1, path2) gives the relative path from a directory to another
l(path.relative("/data/orandea/test/aaa", "/data/orandea/impl/bbb"));

// path.resolve joins paths from right to left until an absolute path is formed. If none is formed, the cwd is used
l(path.resolve("C:\\foo", "C:\\bar", "baz"));
l(path.resolve("foo", "bar.jpg"));

// path.toNamespacedPath is just for Windows
l(path.toNamespacedPath("C:\\folder\\file.jpg"));
