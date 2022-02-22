document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        const target = targetSection.getBoundingClientRect().top + window.scrollY - 80;
  
        window.scrollTo({
            top: target, behavior: 'smooth'
        });
    });
});

//Convert HTML code to text
function convertHTMLToCodeSnippet(code) {
    return code.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function generateSnippetCode(sectionId) {
    const componentElemet = document.getElementById(`${sectionId}-code`) 
    const snippetElement = document.getElementById(`${sectionId}-snippet`);
    snippetElement.innerHTML = convertHTMLToCodeSnippet(componentElemet.innerHTML);
}

// Generate Alert Snippet
generateSnippetCode("alert");

// Generate Avatar Snippet
generateSnippetCode("avatar");

// Generate Badge Snippet
generateSnippetCode("badge");

// Generate Button Snippet
generateSnippetCode("button");

// Generate Card Snippet
generateSnippetCode("card");

// Generate Image Snippet
generateSnippetCode("image");

// Generate Input Snippet
generateSnippetCode("input");

// Generate Text Utility Snippet
generateSnippetCode("text-utility");

// Generate List Snippet
generateSnippetCode("list");

// Generate Navigation Snippet
generateSnippetCode("navigation");