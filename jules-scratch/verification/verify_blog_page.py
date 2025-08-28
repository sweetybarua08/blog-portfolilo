from playwright.sync_api import Page, expect

def test_blog_page_loads_posts(page: Page):
    """
    This test verifies that the blog page fetches and displays blog posts from the API.
    """
    # 1. Arrange: Go to the blog page.
    page.goto("http://localhost:5173/blog")

    # 2. Assert: Check that the heading is visible.
    heading = page.get_by_role("heading", name="Blog")
    expect(heading).to_be_visible()

    # 3. Assert: Check that at least one blog card is rendered.
    # We'll wait for the first blog card to appear, which indicates the API call was successful.
    first_card = page.locator(".bg-card").first
    expect(first_card).to_be_visible()

    # 4. Screenshot: Capture the final result for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")
