package tree_sitter_mql5_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_mql5 "github.com/chaploud/tree-sitter-mql5/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_mql5.Language())
	if language == nil {
		t.Errorf("Error loading Mql5 grammar")
	}
}
