// swift-tools-version: 5.8

import PackageDescription

let package = Package(
    name: "LiveCodes",
    platforms: [.iOS(.v16), .macOS(.v13)],
    products: [
        .library(
            name: "LiveCodes",
            targets: ["LiveCodes"]),
    ],
    dependencies: [
    ],
    targets: [
        .target(
            name: "LiveCodes",
            path: ".",
            dependencies: [
            ],
            exclude: [
                "src/node_modules",
                "src/codecore.js",
                "src/rollup.config.mjs",
                "src/package.json",
                "src/package-lock.json",
            ],
            resources: [
                .copy("build"),
            ]),
        .target(
            name: "CodeLibrary",
            dependencies: [
                .target(name: "CodeCore"),
                .product(name: "OPML", package: "OPML"),
                .product(name: "FilePicker", package: "FilePicker"),
                .product(name: "Realm", package: "realm-swift"),
                .product(name: "RealmSwift", package: "realm-swift"),
                .product(name: "RealmSwiftGaps", package: "RealmSwiftGaps"),
                .product(name: "SwiftUIWebView", package: "swiftui-webview"),
                .product(name: "SwiftUtilities", package: "SwiftUtilities"),
                .product(name: "SwiftUIDownloads", package: "SwiftUIDownloads"),
//                .product(name: "DebouncedOnChange", package: "DebouncedOnChange"),
            ],
            resources: [
            ]),
        .target(
            name: "CodeEditor",
            dependencies: [
                .target(name: "CodeCore"),
            ],
            resources: [
            ]),
        .target(
            name: "CodeCI",
            dependencies: [
                .target(name: "CodeCore"),
            ],
            resources: [
            ]),
        .target(
            name: "CodeRunner",
            dependencies: [
                .target(name: "CodeCore"),
            ],
            resources: [
            ]),
    ]
)

