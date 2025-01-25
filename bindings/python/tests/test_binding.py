from unittest import TestCase

import tree_sitter, tree_sitter_mql5


class TestLanguage(TestCase):
    def test_can_load_grammar(self):
        try:
            tree_sitter.Language(tree_sitter_mql5.language())
        except Exception:
            self.fail("Error loading Mql5 grammar")
