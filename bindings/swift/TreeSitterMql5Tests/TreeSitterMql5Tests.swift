import XCTest
import SwiftTreeSitter
import TreeSitterMql5

final class TreeSitterMql5Tests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_mql5())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Mql5 grammar")
    }
}
