using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GameDevRecipes.API.Migrations
{
    /// <inheritdoc />
    public partial class Setmaxlengthofdescription : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Videos",
                type: "nvarchar(270)",
                maxLength: 270,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "Videos",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(270)",
                oldMaxLength: 270);
        }
    }
}
